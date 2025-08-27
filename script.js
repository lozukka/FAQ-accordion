const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const plusIcon = question.querySelector('.plus-icon');
    const minusIcon = question.querySelector('.minus-icon');

    if (answer.style.maxHeight) {
      // Close the currently open answer
      answer.style.maxHeight = null;
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      // Close any other open answers
      questions.forEach((otherQuestion) => {
        const otherAnswer = otherQuestion.nextElementSibling;
        const otherPlusIcon = otherQuestion.querySelector('.plus-icon');
        const otherMinusIcon = otherQuestion.querySelector('.minus-icon');
        if (otherAnswer.style.maxHeight) {
          otherAnswer.style.maxHeight = null;
          otherPlusIcon.style.display = 'block';
          otherMinusIcon.style.display = 'none';
        }
      });
      // Open the clicked answer
      answer.style.maxHeight = answer.scrollHeight + "px";
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
})