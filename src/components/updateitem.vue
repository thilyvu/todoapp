<template>
     <form name="newform" v-on:submit.prevent="UpdateItem(Item)">
    <label for="update">Update to the todo list</label>
    <input type="text" name="updateItem" id="updateItem" v-model="updateItem">
    <button type="submit">Update item</button>
  </form>
</template>
<style  scoped>
/* FORM */
form {
	margin-top:3rem;
	display:flex;
	flex-wrap:wrap;
}
form label {
	min-width:100%;
	margin-bottom:.5rem;
	font-size:1.3rem;
}
form input {
	flex-grow:1;
	border:none;
	background:#f7f1f1;
	padding:0 1.5em;
	font-size:initial;
}
form button {
	padding:0 1.3rem;
	border:none;
	background:#FF6666;
	color:white;
	text-transform:uppercase;
	font-weight:bold;
	border:1px solid rgba(255,255,255,.3);
	margin-left:5px;
	cursor:pointer;
	transition:background .2s ease-out;
}
form button:hover {
	background:#FF5E5E;
}
form input, 
form button {
	font-family:'Quicksand', sans-serif;
	height:3rem;
}
.togglebutton-wrapper {
	margin-top:1em;
}
.togglebutton-wrapper label {
    display:flex;
    justify-content:flex-end;
    align-items:center;
}
.togglebutton-wrapper input {
	position:absolute;
    left:-9999px;
}
.togglebutton-wrapper .togglebutton-label {
	font-size:.8rem;
	letter-spacing:.1em
}
.togglebutton-wrapper .tooglebutton-box {
	position:relative;
	display:block;
	margin-left:0.6em;
	width:38px;
	height:22px;
	background:white;
	/*border:1px solid black;*/
	border-radius:999px;
	cursor:pointer;
}
.togglebutton-wrapper .tooglebutton-box:before {
	content:'';
	position:absolute;
	top:2px; left:2px;
	display:block;
	width:18px; height:18px;
	/*border:1px solid #FF6666;*/
	border-radius:50%;
	background:#FF6666;
	opacity:0.7;
	transition:	all .2s ease-in-out;
}
.togglebutton-wrapper.togglebutton-focus .tooglebutton-box {
	box-shadow:0px 0px 0px 3px rgba(0,0,0,0.1);
}
.togglebutton-wrapper.togglebutton-checked .tooglebutton-box:before {
	left:calc(100% - 4px - 16px);
	opacity:1;}
</style>

<script>
export default{
    data(){
      return {
        updateItem:'',
        done:false,
        id:Math.random()*100000
      }
    },
	methods:{
		UpdateItem()
		{
        if (this.updateItem=='')
        {
          alert("please add task")
        }
        const newI={
          id:Math.floor(Math.random()*100000),
          label:this.updateItem,
          done:false
        }
        this.$emit('Update2',newI);
        this.updateItem='';

      }
	},
	props:{
		Item:Object,
	}
}

</script>
