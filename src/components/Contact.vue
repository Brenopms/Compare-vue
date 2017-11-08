<template>
 <section class="section">
	 <div class="contact">
	  	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">De</label>
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <p class="control is-expanded has-icons-left">
	        <input class="input" type="text" placeholder="Nome">
	        <span class="icon is-small is-left">
	          <i class="fa fa-user"></i>
	        </span>
	      </p>
	    </div>
	    <div class="field">
	      <p class="control is-expanded has-icons-left has-icons-right">
	        <input class="input" type="email" placeholder="Email">
	        <span class="icon is-small is-left">
	          <i class="fa fa-envelope"></i>
	        </span>
<!-- 	        <span class="icon is-small is-right">
	          <i class="fa fa-check"></i>
	        </span> -->
	      </p>
	    </div>
	  </div>
	</div>

	<div class="field is-horizontal">
	  <div class="field-label"></div>
	  <div class="field-body">
	    <div class="field is-expanded">
	      <div class="field has-addons">
	        <p class="control">
	          <a class="button is-static">
	            +55
	          </a>
	        </p>
	        <p class="control is-expanded">
	          <input class="input" type="tel" placeholder="Seu número de telefone">
	        </p>
	      </div>
	      <p class="help">Insira no formato: xx xxxx xxxx</p>
	    </div>
	  </div>
	</div>

	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">Área</label>
	  </div>
	  <div class="field-body">
	    <div class="field is-narrow">
	      <div class="control">
	        <div class="select is-fullwidth">
	          <select>
	            <option>Front-end</option>
	            <option>Back-end</option>
	            <option>Full-stack</option>
	          </select>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>

	<div class="field is-horizontal">
	  <div class="field-label">
	    <label class="label">Já um membro?</label>
	  </div>
	  <div class="field-body">
	    <div class="field is-narrow">
	      <div class="control">
	        <label class="radio">
	          <input type="radio" name="member">
	          Sim
	        </label>
	        <label class="radio">
	          <input type="radio" name="member">
	          Não
	        </label>
	      </div>
	    </div>
	  </div>
	</div>

	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">Assunto</label>
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <div class="control">
	        <input class="input " type="text" placeholder="e.g. Oportunidade de Parceria">
	      </div>
	<!--       <p class="help is-danger">
	        This field is required
	      </p> -->
	    </div>
	  </div>
	</div>

	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">Question</label>
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <div class="control">
	        <textarea class="textarea" placeholder="Explique como podemos lhe ajudar"></textarea>
	      </div>
	    </div>
	  </div>
	</div>

	<div class="field is-horizontal">
	  <div class="field-label">
	    <!-- Left empty for spacing -->
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <div class="control">
	        <button class="button is-primary">
	          Enviar Mensagem
	        </button>
	      </div>
	    </div>
	  </div>
	</div>

	  </div>
</section>
</template>

<script>


export default {
  name: 'contact',
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.button:hover
	box-shadow: 0 10px 12px 0 rgba(0,0,0,0.24), 0 10px 20px 0 rgba(0,0,0,0.19);


</style>
