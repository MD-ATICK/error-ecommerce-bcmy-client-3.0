import * as React from 'react';

function FAQ() {
  return (
    <div className="p-6 mx-auto mt-3">
      <h1 className="mx-auto text-center text-3xl font-bold mb-5 w-[500px] tracking-wide pb-2 border-b-4 border-blue-400 "> FAQ Questions</h1>
      <div>

        <div className="mb-3shadow-lg rounded-md w-[500]  md:w-[1000px] mx-auto px-5 py-3 mb-5 ">
          <h1 className="break-wordcss text-[15px] bg-green-600 px-6 rounded-md shadow-lg py-1 text-white font-[400]"> <span className="px-2 bg-amber-200 mr-2 text-black h-8 rounded-full">1</span> What different in map , filter , foreach and find ? </h1>
          <p className="py-3 text-[14px] pl-9 tracking-[.5px] leading-[1.8rem]">
            <span className="text-[14px] -ml-4 font-medium bg-green-600 text-white p-1 rounded-md">Ans</span> :
            In first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different and filter(). find() difference is filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition. In filter() , whole array is iterated despite the fact that the element being searched for is present at the beginning.
          </p>
        </div>
        <div className="mb-3shadow-lg rounded-md w-[1000px] mx-auto px-5 py-3 mb-5 ">
          <h1 className="break-wordcss text-[15px] bg-green-600 px-6 rounded-md shadow-lg py-1 text-white font-[400]"> <span className="px-2 bg-amber-200 mr-2 text-black h-8 rounded-full">2</span> What different of localStorage , sessionStorage and cookies ?</h1>
          <p className="py-3 text-[14px] pl-9 tracking-[.5px] leading-[1.8rem]">
            <span className="text-[14px] -ml-4 font-medium bg-green-600 text-white p-1 rounded-md">Ans</span> :
            Local storage is useful for storing data that the user will need to access later, such as offline data. Session storage allows you to store data in the browser depending on the system memory and the data stored in the browser until the browser is closed. In other words, closing the browser will clear all the data stored in session storage. The two have different purposes, and hence different strengths and weaknesses. Cookies are intended to be read by the server, whereas localStorage can only be read by the browser. Thus, cookies are restricted to small data volumes, while localStorage can store more data.
          </p>
        </div>
        <div className="mb-3shadow-lg rounded-md w-[1000px] mx-auto px-5 py-3 mb-5 ">
          <h1 className="break-wordcss text-[15px] bg-green-600 px-6 rounded-md shadow-lg py-1 text-white font-[400]"> <span className="px-2 bg-amber-200 mr-2 text-black h-8 rounded-full">3</span> What is event loop and how it work ? </h1>
          <p className="py-3 text-[14px] pl-9 tracking-[.5px] leading-[1.8rem]">
            <span className="text-[14px] -ml-4 font-medium bg-green-600 text-white p-1 rounded-md">Ans</span> :
            JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java. It work like If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop.
          </p>
        </div>
        <div className="mb-3shadow-lg rounded-md w-[1000px] mx-auto px-5 py-3 mb-5 ">
          <h1 className="break-wordcss text-[15px] bg-green-600 px-6 rounded-md shadow-lg py-1 text-white font-[400]"> <span className="px-2 bg-amber-200 mr-2 text-black h-8 rounded-full">4</span> What work of quizTimer funtion in noChange.js file ? </h1>
          <p className="py-3 text-[14px] pl-9 tracking-[.5px] leading-[1.8rem]">
            <span className="text-[14px] -ml-4 font-medium bg-green-600 text-white p-1 rounded-md">Ans</span> :
            quizTime funtion input a parameter value name dismiss, if dismiss true then interval will be clear. if condition false then run setinterval. In setinterval get count by id and count/60 for get minutes and count%60 for get sec. then make the counthtml innerText . Then start validation that if count grather then 60 then enter this condition and if count%2 === 0 then run one condition else run condition. The setinterval run set time is 1000 or 1sec.
          </p>
        </div>
        <div className="mb-3shadow-lg rounded-md w-[1000px] mx-auto px-5 py-3 mb-5 ">
          <h1 className="break-wordcss text-[15px] bg-green-600 px-6 rounded-md shadow-lg py-1 text-white font-[400]"> <span className="px-2 bg-amber-200 mr-2 text-black h-8 rounded-full">5</span> What work of chooseQuiz funtion noChange.js file ? </h1>
          <p className="py-3 text-[14px] pl-9 tracking-[.5px] leading-[1.8rem]">
            <span className="text-[14px] -ml-4 font-medium bg-green-600 text-white p-1 rounded-md">Ans</span> :
            in First, chooseQuiz funtion input 2 parameter its index and qivenAns form displayQuizOptions funtion. Then finding a data by id and validatino that if isExist then serial = 0 , and for loop quiz of answers(of use because quiz is array) then again validation that isExist.id === quiz.id then splice the awswers and break. There serial will be ++ in evrey runnig this for loop else push some data in awswer . As last call displayAnswers and given answers data as a argument.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ