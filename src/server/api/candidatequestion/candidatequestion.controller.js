/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/samples/eth              ->  index
 */

'use strict';

import CandidateQuestion from '../../model/candidatequestions';

export function getCandidateQuestions(req, res) {
  console.log('Entering getCandidateQuestions()..');
  CandidateQuestion.find(function(err, candidateQuestion){
    res.json(candidateQuestion);
  }); 
}

export function createCandidateQuestion(req, res) {
  console.log('Entering createCandidateQuestion()..');
  console.log(req.body.questionText);
  console.log(req.body.responseChoices);

  let newCandidateQuestion = new CandidateQuestion({
    questionText: req.body.questionText,
    responseChoices: req.body.responseChoices
  });

  newCandidateQuestion.save(function(err, candidateQuestion){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(candidateQuestion);
    }
  });
}

export function deleteCandidateQuestion(req, res) {
  console.log("Entering deleteCandidateQuestion()..id="+req.params.id);
  CandidateQuestion.remove({_id: req.params.id}, function(err, result) {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(result);
    }
  });
}
