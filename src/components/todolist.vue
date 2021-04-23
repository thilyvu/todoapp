<template>
<div>
     <transition-group name="todolist" tag="ul">
      <li v-for="item in todo" v-bind:class="item.done ? 'done' : ''" v-bind:key="item.id">
        <span class="label">{{item.label}}</span>
        <div class="actions">
          <button class="btn-picto" type="button" v-on:click="$emit('update',item)" >
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-picto" type="button" v-on:click="$emit('Check',item)" aria-label="Edit" title="Edit">
                    <div v-if="item.done">
                     <i class="far fa-square" ></i>
                    </div>
                    <div v-else>
                      <i class="far fa-check-square" ></i>
                    </div>
          </button>
          <button class="btn-picto" type="button" v-on:click="$emit('deleteItemFromList',item)" aria-label="Delete" title="Delete">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </transition-group>
    <togglebutton 
                  label="Move done items at the end?"
                  name="todosort"
                  v-on:clicked="clickontoogle" />
 </div>
</template>
<style >
.emptylist {
	margin-top:2.6rem;
	text-align:center;
	letter-spacing:.05em;
	font-style:italic;
	opacity:0.8;
	
}
ul {
	margin-top:2.6rem;
	list-style:none;
}
.todolist-move {
	transition: transform 1s;
}
li {
	display:flex;
	margin:0 -3rem 4px;
	padding:1.1rem 3rem;
	justify-content:space-between;
	align-items:center;
	background:rgba(255,255,255,0.1);
}

.actions {
	flex-shrink:0;
	padding-left:0.7em;
}
.label {
	position:relative;
	transition:opacity .2s linear;
}
.done .label {
	opacity:.6;
}
.done .label:before {
	content:'';
	position:absolute;
	top:50%;
	left:-.5rem;
	display:block;
	width:0%;
	height:1px;
	background:#FFF;
	animation:strikeitem .3s ease-out 0s forwards;
}
.btn-picto {
	border:none;
	background:none;
	-webkit-appearance:none;
	cursor:pointer;
	color:#FFF;
}

</style>
<script>
  export default{
    props:{
      todo:Object
    },

    methods:{
     
      
    }
  }
</script>
