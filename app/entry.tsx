'use strict';
import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

//外部コンポーネント読み込み
import JumboTron from './components/JumboTron';
import NavBar from './components/NavBar';



const App: React.FC = () => {
  const [ count, setCount ] = useState<number>(0)

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1)
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1)
  }, []);

  return (
    <div className="App">
      <NavBar />
      <JumboTron title="React,Redux,Typescript練習" lead="このページはトップページです" />
      <div className="container">
        <div>{ count }</div>
        <div>
          <button onClick={ handleIncrement }> +1 </button>
          <button onClick={ handleDecrement }> -1 </button>
        </div>
      </div>
    </div>
  )
}

const domContainer = document.querySelector('#react-route');
ReactDOM.render(<App />, domContainer);

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