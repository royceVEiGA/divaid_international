const form = document.getElementById('sendMsg');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // stop actual submission (remove if you want real submission)

      // Show notification
      successMsg.classList.add('show');

      form.reset();

      // Hide after 3 seconds
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 3000);
    });