'use strict';
import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch ,Link} from 'react-router-dom';
import Index from './pages/index';
import Question from './pages/question';
import Company from './pages/company';
import Careers from './pages/careers';
import Infomation from './pages/infomation';

const Entry: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Index /></Route>
        <Route exact path="/question"><Question /></Route>
        <Route exact path="/company"><Company /></Route>
        <Route exact path="/careers"><Careers /></Route>
        <Route exact path="/infomation"><Infomation /></Route>
      </Switch>
      <Link to='/'></Link>
    </BrowserRouter>
  )
}

export default Entry

// const global = Function('return this;')();
// global.jQuery = $;
//import bootstrap from 'bootstrap';
// $('.availability-toggle-button').each((i, e) => {
//   const button = $(e);
//   button.click(() => {
//     const scheduleId: string = button.data('schedule-id');
//     const userId: string = button.data('user-id');
//     const candidateId: string = button.data('candidate-id');
//     const availability: number = parseInt(button.data('availability'));
//     const nextAvailability = (availability + 1) % 3;
//     ($ as any).post(`/schedules/${scheduleId}/users/${userId}/candidates/${candidateId}`,
//       { availability: nextAvailability },
//       (data) => {
//         button.data('availability', data.availability);
//         const availabilityLabels = ['欠', '？', '出'];
//         button.text(availabilityLabels[data.availability]);

//         const buttonStyles = ['btn-danger', 'btn-secondary', 'btn-success'];
//         button.removeClass('btn-danger btn-secondary btn-success');
//         button.addClass(buttonStyles[data.availability]);        
//       });
//   });
// });

// const buttonSelfComment = $('#self-comment-button');
// buttonSelfComment.click(() => {
//     const scheduleId = buttonSelfComment.data('schedule-id');
//     const userId = buttonSelfComment.data('user-id');
//     const comment = prompt('コメントを255文字以内で入力してください');
//     if(comment) {
//         ($ as any).post(`/schedules/${scheduleId}/users/${userId}/comments`,
//         { comment: comment },
//             (data) => {
//                 $('#self-comment').text(data.comment);
//             }
//         );

//     }
// })