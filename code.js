document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const startButton = document.getElementById('startButton');

    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[n].classList.add('active');
    }

    startButton.addEventListener('click', function () {
       showSlide(currentSlide = 1);
       document.querySelector('header').remove();
        createTimeline();
        createChart();
        createInfographic();
      createQuiz();
        createMapContainer();
        createComments();
    });
    // timeline
    function createTimeline() {
       const timeline = document.getElementById('timeline');

    const data = [
      {
        year: 1750,
        text: "Início da Revolução Industrial na Inglaterra",
         url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cromford_Mill.jpg/800px-Cromford_Mill.jpg',
         alt:'imagem de uma indústria do século XVIII'
      },
      {
        year: 1800,
        text: "Expansão do comércio marítimo e das colônias",
        url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/The_Arrival_of_Columbus_at_San_Salvador_October_12th_1492_by_John_Vanderlyn.jpg/1280px-The_Arrival_of_Columbus_at_San_Salvador_October_12th_1492_by_John_Vanderlyn.jpg',
        alt:'A chegada de Colombo a América'

      },
      {
          year: 1870,
        text: "Segunda Revolução Industrial e o imperialismo",
         url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Imperialismus.jpg/1920px-Imperialismus.jpg',
         alt:'Mapa da divisão da África'
      },
      {
          year: 1945,
          text: "Pós Segunda Guerra e o mundo bipolar",
         url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/World_War_II_Alliances.svg/1920px-World_War_II_Alliances.svg.png',
         alt:'mapa da aliança da segunda guerra'
      }
      ,
       {
          year: 1990,
          text: "A globalização e o mundo multipolar",
            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Global_Connectivity_Map.svg/1920px-Global_Connectivity_Map.svg.png',
         alt:' mapa da globalização'
      }
    ];

      data.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');

        const yearElement = document.createElement('h3');
        yearElement.textContent = item.year;
          const textElement = document.createElement('p');
          textElement.textContent = item.text;
           const imgElement = document.createElement('img');
           imgElement.src = item.url;
         imgElement.alt= item.alt;

         timelineItem.appendChild(yearElement)
           timelineItem.appendChild(textElement)
          timelineItem.appendChild(imgElement)
        timeline.appendChild(timelineItem);
      });
    }
    function createChart(){
         const chartContainer = document.getElementById('chartContainer');
             chartContainer.innerHTML = "Aqui será mostrado um gráfico animado com dados das rendas per capita";
    }
    // infográfico
    function createInfographic(){
     const infographic = document.getElementById('infographic');
     infographic.innerHTML = "Aqui será mostrado um infográfico interativo sobre as fases da Revolução Industrial";
    }
    // Quiz
    function createQuiz(){
        const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = "Aqui será mostrado um quiz sobre a Revolução Industrial";
    }
  function createMapContainer() {
      const mapContainer = document.getElementById('mapContainer');
      const mapUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/World_industrial_zones_map.png/1920px-World_industrial_zones_map.png';
        const mapElement = document.createElement('img');
        mapElement.src = mapUrl;
        mapElement.alt= 'Mapa de zonas industriais no mundo';
       mapContainer.appendChild(mapElement);
       mapContainer.style.textAlign= 'center';
    }
   function createComments(){
       const commentArea = document.getElementById('commentArea');
     commentArea.innerHTML = "<input type='text' placeholder='Envie seu comentário'><br><button>Comentar</button>";
    }

});