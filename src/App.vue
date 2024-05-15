<template>
	<div>
		<div v-if="loading">
        </div>
	<div v-else className="todolist">
		<headers></headers>
		<todolist :todo="todos" @deleteItemFromList="deleteItem" position="1"
					@check="checkItem" @update="updateOldItem"
		></todolist>
		<todolist :todo="todosFalse" @deleteItemFromList="deleteItem" position="2"
					@check="checkItem" @update="updateOldItem"
		></todolist>
		<div v-if="showupdate">
			<updateitem @Update2="updateNew" :update="UD" ></updateitem>
		</div>
		
			<addtask @addItem="addNewItem"></addtask>
	</div>
	</div>
</template>
<style scoped >
.todolist{
	margin-right: 30%;
	margin-left: 30%;
	margin:4rem auto;
	padding:2rem 3rem 3rem;
	max-width:500px;
	background:#FF6666;
	color:#FFF;
	box-shadow:-20px -20px 0px 0px rgba(100,100,100,.1);
}
</style>
<script>
import addtask from './components/addtask.vue';
import headers from "./components/headers";
import todolist from "./components/todolist";
import updateitem from './components/updateitem';
import axios from 'axios'

export default {
	setup() {
		
	},
	async mounted(){
		try {
			var result= await axios({
				method:"POST",
				url: 'https://todoapp1111.hasura.app/v1/graphql',
					headers: { 'Content-Type': 'application/json','x-hasura-admin-secret':'U6vFWYbKmDf6oz3VxCUAMiA5gytVn3nvr02fN5ykmSD1LkvZK11gIMpwdEdIe2eh'},
				data:{
			
					query: `
						query MyQuery {
							todos(where: {done: {_eq: true}}) {
								done
								id
								label
							}
							}

				`
			}
			});
		console.log(result.data.data.todos);
		this.todos=result.data.data.todos;
		} catch (error) {
			console.error(error);
			this.loading = false; 
		}
		try {
			var result1= await axios({
				method:"POST",
				url: 'https://todoapp1111.hasura.app/v1/graphql',
					headers: { 'Content-Type': 'application/json','x-hasura-admin-secret':'U6vFWYbKmDf6oz3VxCUAMiA5gytVn3nvr02fN5ykmSD1LkvZK11gIMpwdEdIe2eh'},
				data:{
			
					query: `
						query MyQuery {
						todos(where: {done: {_eq: false}}) {
							done
							id
							label
						}
						}
				`
			}
			});
		console.log(result1.data.data.todos);
		this.todosFalse=result1.data.data.todos;
		} catch (error) {
			console.error(error);
			this.loading = false; 
		}
		this.loading = false; 
	},
	
	components:{
		headers,todolist,addtask,updateitem,	
	},

	data(){
		
		return{
			todos:[],
			todosFalse:[],
			UD:{
				id:1000,label: "Learn VueJs", done: true
			},
			showupdate:false,		
			loading: true, 	
		}
	},

	methods:{
		async deleteItem(item){
			this.todos =this.todos.filter((todo)=>todo.id!==item.id);
			this.todosFalse =this.todosFalse.filter((todoFalse)=>todoFalse.id!==item.id);
			try {
			var result= await axios({
				method:"POST",
				url: 'https://todoapp1111.hasura.app/v1/graphql',
					headers: { 'Content-Type': 'application/json','x-hasura-admin-secret':'U6vFWYbKmDf6oz3VxCUAMiA5gytVn3nvr02fN5ykmSD1LkvZK11gIMpwdEdIe2eh'},
				data:{
					query: `
					mutation MyMutation($_eq: uuid) {
					delete_todos(where: {id: {_eq: $_eq}}) {
						returning {
						done
						id
						}
					}
					}

				`,
				variables:{					
					"_eq":item.id
				}
				
			}
			});
			console.log(result.data.data.todos);
			//this.todos=result.data.data.todos;
			} catch (error) {
				console.error(error);
			}

		},
		async checkItem(item){
			console.log(item.done)

			if(item.done==true)
			{

				this.todosFalse.push(item);
				this.todosFalse=this.todosFalse.map((todo)=>todo.id===item.id? {...todo,done:!todo.done} :todo);	
				this.todos =this.todos.filter((todo)=>todo.id!==item.id);
				
			}
			else {
		
				this.todos.push(item);
				this.todos=this.todos.map((todo)=>todo.id===item.id? {...todo,done:!todo.done} :todo);
				this.todosFalse =this.todosFalse.filter((todoFalse)=>todoFalse.id!==item.id);
			}
				try {
			var result= await axios({
				method:"POST",
				url: 'https://todoapp1111.hasura.app/v1/graphql',
					headers: { 'Content-Type': 'application/json','x-hasura-admin-secret':'U6vFWYbKmDf6oz3VxCUAMiA5gytVn3nvr02fN5ykmSD1LkvZK11gIMpwdEdIe2eh'},
				data:{
					query: `
					mutation MyMutation($_eq: uuid, $_set: todos_set_input ) {
						update_todos(where: {id: {_eq: $_eq}}, _set: $_set) {
							returning {
							done
							}
						}
						}
				`,
				variables:{					
					"_eq": item.id,
					"_set": {
						"done": !item.done
						}	
						}
				
			}
			});
			console.log(result.data.data.todos);
			//this.todos=result.data.data.todos;
			} catch (error) {
				console.error(error);
			}

		},
		updateOldItem(item){
			this.UD.id=item.id;
			this.UD.label=item.label;
			this.UD.done=item.done;
			this.showupdate=!this.showupdate;
			//console.log(this.UD.id,this.UD.done,this.UD.label);
		},
		async addNewItem(item){
			console.log(item.done);
			if(item.done==true)
			{
				this.todos.push(item);
			}
			else {
				this.todosFalse.push(item);
			}
			try {
			var result= await axios({
				method:"POST",
				url: 'https://todoapp1111.hasura.app/v1/graphql',
					headers: { 'Content-Type': 'application/json','x-hasura-admin-secret':'U6vFWYbKmDf6oz3VxCUAMiA5gytVn3nvr02fN5ykmSD1LkvZK11gIMpwdEdIe2eh'},
				data:{
					query: `
					 mutation MyMutation($objects: [todos_insert_input!]!) {
						insert_todos(objects: $objects) {
							returning {
							done
							id
							label
							}
						}
						}
				`,
				variables:{					
					"objects": {
						"done": item.done,
						"label": item.label
					}	
				}
				
			}
			});
			console.log(result.data.data.todos);
			//this.todos=result.data.data.todos;
			} catch (error) {
				console.error(error);
			}
		},
		async updateNew(item){
			console.log(item.done);
			if(item.done== true)
			{
				this.todos=this.todos.map((todo)=>todo.id===this.UD.id?{todo,label:item.label}:todo);
			}
			else{
				this.todosFalse=this.todosFalse.map((todoFalse)=>todoFalse.id===this.UD.id?{todoFalse,label:item.label}:todoFalse);	
			}
			try {
				var result= await axios({
					method:"POST",
					url: 'https://todoapp1111.hasura.app/v1/graphql',
						headers: { 'Content-Type': 'application/json','x-hasura-admin-secret':'U6vFWYbKmDf6oz3VxCUAMiA5gytVn3nvr02fN5ykmSD1LkvZK11gIMpwdEdIe2eh'},
					data:{
						query: `
						mutation MyMutation($_eq: Int , $_set: todos_set_input = {}) {
							update_todos(where: {id: {_eq: $_eq}}, _set: $_set) {
								returning {
								done
								id
								label
								}
							}
							}

					`,
					variables:{					
						"_eq": this.UD.id,
						"_set": {
							"done": item.done,
							"label": item.label
						}
					}
				}
				});
				console.log(result.data.data.todos);
				//this.todos=result.data.data.todos;
				} catch (error) {
					console.error(error);
				} 

			this.showupdate=!this.showupdate;
		} 	
	}
}
</script>
