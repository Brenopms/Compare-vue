<template>
  <div class="home">
	 <section class="hero is-medium is-primary is-bold">
	  <div class="hero-body">
	    <div class="container">
	      <h1 class="title">{{heading}}</h1>
	      <div class = 'is-two-thirds column is-paddingless'>
	      	<h2 class="subtitle is-4">{{subheading}}</h2>
	      </div>
	      <a class="button is-large is-primary " id="learn">Learn More</a>
	    </div>
	  </div>
	</section>


	<section class="section">
		<div class="columns pd is-desktop">
			<div class="column is-1 has-text-centered">
				<i class="fa fa-cog is-primary"></i>
			</div>
			<div class="column is-one-third-desktop">
				<p class="title"> <strong>Nós fornecemos Logistica de qualidade para que seu empreendimento possa ser bem sucedido</strong></p>
			</div>
			<div class="column ">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>


		</div>
	 <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Essa é uma ferramenta incrível, não poderia viver sem ela!"</p>
              <p class="subtitle">- Jorge Macedo</p>
            </div>
          </div>
        </div>
       	<div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Essa é uma ferramenta incrível, não poderia viver sem ela!"</p>
              <p class="subtitle">- Jorge Macedo</p>
            </div>
          </div>
        </div>		        
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Essa é uma ferramenta incrível, não poderia viver sem ela!"</p>
              <p class="subtitle">- Jorge Macedo</p>
            </div>
          </div>
        </div>
	</div>

	</section>
  </div>
</template>

<script>


export default {
  name: 'home',
  data (){
  	return {
  		heading: 'Alcançando novos céus',
  		subheading: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI'
  	}
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
	background-size: cover

	.title
		+mobile
			font-weight: bold
		+tablet
			font-size: 2.5rem
		+desktop
			font-size: 4rem
			margin-top: 2rem

	.subtitle
		margin: 1.5rem 0 2rem 0

	.button
		background-color: #3C7FE1
		&:hover
			transform: scale(1.2)

.fa-cog
	font-size: 40px

#learn
	+desktop
		margin-botton: 2rem

.pd 
	+tablet
		padding: 2em 0

	.title
		font-weight: 400
		font-size: 1.6rem

 
	

</style>

