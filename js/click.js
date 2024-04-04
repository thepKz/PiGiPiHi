document.addEventListener('DOMContentLoaded', function() {
    var chayElement = document.querySelector('.link2');
    chayElement.addEventListener('mouseenter', function() {
      var randomNum = Math.random() * 2 - 1;
      var newLeft = randomNum * 350;
      var newTop = randomNum * 350;
      
      // Cập nhật vị trí mới cho phần tử
      this.style.position = 'absolute';
      this.style.left =  newLeft + 'px';
      this.style.top = newTop + 'px';
    });
  });
  

