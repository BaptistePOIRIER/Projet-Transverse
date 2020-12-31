<template>
  <div>
    <header-tpl class="header" :connected="connected"></header-tpl>
    <section id="sec-1">
      <div class="subsection">
        <h2>A propos de Step By Step</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam accusantium voluptatibus laudantium ipsa reiciendis quae corrupti sapiente! Consectetur, debitis fugit asperiores excepturi consequatur eos! Et, beatae! Nobis, quaerat eius!</p>
      </div>
      <div class="scroll down"></div>
       <a href="#sec-2">
         <div class="scroll-down"></div>
        </a>
    </section >
    <section id="sec-2">
      <div class="subsection">
        <h2>Qui sommes nous ?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam accusantium voluptatibus laudantium ipsa reiciendis quae corrupti sapiente! Consectetur, debitis fugit asperiores excepturi consequatur eos! Et, beatae! Nobis, quaerat eius!</p>
      </div>
      <div class="scroll down"></div>
      <a href="#sec-3">
        <div class="scroll-down"></div>
      </a>
    </section >
    <section id="sec-3">
      <div class="subsection">
        <h2>Nos algorithmes</h2>
      </div>
        <algo-tpl :algorithms="algorithms"></algo-tpl>

      <div class="scroll down"></div>
      <a href="#sec-1">
        <div class="scroll-down"></div>
      </a>

    </section >
    
   
     
  </div>
 

</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')
const AlgoTemplate = window.httpVueLoader('./components/Algo.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate,
    'algo-tpl': AlgoTemplate
  },
  props: {
    connected: { type: Boolean },
    algorithms: { type: Array }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  
}
.header {
  width: 100%;
}

.subsection {
  text-align: center;
  padding: 10% 20% 0% 20%;
}
        html {
            scroll-behavior: smooth;
        }
        
        body {
            
            height: 100vh;
            background-size: cover;
            background-position: center;
            background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
        }
        
        
       
        section {
            display: inline;
        }
        
        
        section {
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        #sec-1 {
            position: relative
        }
        
        #sec-2 {
            
            position: relative;
        }
        
        #sec-3 {
            
            position: relative;
        }
        
        
        .scroll-down {
            height: 50px;
            width: 30px;
            border: 2px solid rgb(0, 0, 0);
            position: absolute;
            left: 50%;
            bottom: 20px;
            border-radius: 50px;
            cursor: pointer;
        }
        
        .scroll-down::before,
        .scroll-down::after {
            content: "";
            position: absolute;
            top: 20%;
            left: 50%;
            height: 10px;
            width: 10px;
            transform: translate(-50%, -100%) rotate(45deg);
            border: 2px solid rgb(0, 0, 0);
            border-top: transparent;
            border-left: transparent;
            animation: scroll-down 1s ease-in-out infinite;
        }
        
        .scroll-down::before {
            top: 30%;
            animation-delay: 0.3s;
        }
        
        @keyframes scroll-down {
            0% {
                opacity: 0;
            }
            30% {
                opacity: 1;
            }
            60% {
                opacity: 1;
            }
            100% {
                top: 90%;
                opacity: 0;
            }
        }





</style>
