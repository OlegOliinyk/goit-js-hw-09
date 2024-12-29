const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';

try {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message;
  }
} catch (error) {
  console.error('Error reading from localStorage:', error);
}
feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  try {
    localStorage.setItem(storageKey, JSON.stringify(formData));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
});
