(function(){
  Element_visualizer();

  function Element_visualizer(){
    var inputField = document.createElement('input');
    document.querySelector('body').appendChild(inputField);

    var renderButton = document.createElement('button');
    renderButton.innerHTML = 'render';
    document.querySelector('body').appendChild(renderButton);
    renderButton.addEventListener('click',render);

    function render(){
      for (var i = 0; i < document.querySelectorAll(inputField.value).length; i++) {
        document.querySelectorAll(inputField.value)[i].style.backgroundColor = 'yellow';
      };
    }


    return {

    };
  };


})();
