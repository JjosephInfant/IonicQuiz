/**
 * @author Joseph <infantjoseph@gmail.com>
 */

import { Component, NgZone } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { questionJson } from '../../app/questions';
import { FormGroup, FormControl } from '@angular/forms';

interface Question { question: string, option1: string, option2: string, option3: string, answer: number }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  everythingLoaded = false;
  questions: any;
  quizFinished = false;
  isHome = true;
  correctAnswers = 0;
  questionsAsked = 1;
  currentQuestion: Question;
  selectedAnswer = -1;
  nextQuestion = "Next Question";
  completeQuiz = "Done";
  currentAnswer = 0;
  batchQuizQuestions = [];
  quizQuestionForm;
  quizResult;

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private zone : NgZone) {
    this.quizQuestionForm = new FormGroup({ listOptions: new FormControl() });
    this.questions = questionJson;
    this.getQuizQuestion();
  }


  next() {
    if (+this.currentAnswer === this.currentQuestion.answer) {
      this.correctAnswers++;
    }
    this.questionsAsked++;
    this.getQuizQuestion();
  }

  updateAnswer(answer: number) {
    this.currentAnswer = answer;
  }

  startQuiz() {
    this.questionsAsked = 0;
    this.correctAnswers = 0;
    this.quizFinished = false;
    this.isHome = false;
  }

  getQuizQuestion() {
    this.zone.run(()=>{
      this.quizQuestionForm.controls.listOptions.reset();
    });
    if (this.questionsAsked === 5) {
      this.quizResult = (this.correctAnswers / this.questionsAsked) * 100;
      this.quizFinished = true;
    }
    else {
      const index = this.getRandomQuizIndex();
      this.currentQuestion = this.questions[index];
      this.batchQuizQuestions.push(index);
      this.everythingLoaded = true;
    }
  }

  landHome() {
    this.quizFinished = false;
    this.isHome = true;
    this.batchQuizQuestions = [];
  }

  getRandomQuizIndex() {
    let randomIndex = -1;
    do {
      randomIndex = Math.floor(Math.random() * 7);
    }
    while (!(this.batchQuizQuestions.indexOf(randomIndex) <= -1)) {
      return randomIndex;
    }
  }

}
