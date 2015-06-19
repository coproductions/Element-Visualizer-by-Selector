javascript:(function(){

  function Element_visualizer(){
    var inputDiv = document.createElement('div');
    inputDiv.style.height = '40px';
    var inputField = document.createElement('input');
    inputDiv.appendChild(inputField);
    var renderButton = document.createElement('button');
    renderButton.innerHTML = 'render';
    inputDiv.appendChild(renderButton);
    renderButton.addEventListener('click',render);
    var resetButton = document.createElement('button');
    resetButton.innerHTML = 'reset';
    inputDiv.appendChild(resetButton);
    resetButton.addEventListener('click',resetColors);
    document.querySelector('body').insertBefore(inputDiv,document.querySelector('body').firstChild)

    var colorCache = [];

    function resetColors(){
      var lastSelector = colorCache.shift();
      for (var i = 0; i < colorCache.length; i++) {
        document.querySelectorAll(lastSelector)[i].style.backgroundColor = colorCache[i];
      };
    };

    function render(){
      resetColors();
      colorCache = [inputField.value]
      console.log('ienein',colorCache)
      for (var i = 0; i < document.querySelectorAll(inputField.value).length; i++) {
        colorCache.push(document.querySelectorAll(inputField.value)[i].style.backgroundColor);
        document.querySelectorAll(inputField.value)[i].style.backgroundColor = 'yellow';
      };
    };
  };
  Element_visualizer();
})();
