/*
* @Author: ME
* @Date:   2021-01-14 15:10:43
* @Last Modified by:   ME
* @Last Modified time: 2021-01-14 22:10:09
*/
new Vue({
	el:'#app',
	data:{
		// 控制编辑弹框的显示
		dialogVisible: false,
		user:{
			name:'',
			gender:'',
			phoneNum:'',
			birthDay:''
		},
		// 用户信息
		 userData: [{
            name: '王小虎',
            gender:'男',
            phoneNum:'123456789',
            birthDay: '2016-05-02',
          }],
          editUser:{
			name:'',
			gender:'',
			phoneNum:'',
			birthDay:''
		},
		indexOfUser: 0
		},
	methods:{
		// 添加一组数据
		addUserInfo:function(){
			if(!this.user.name){
				this.$message({
			          message: '请输入姓名',
			          type: 'warning'
			     });
				return;
			}
			if(!this.user.gender){
				this.$message({
			          message: '请输入性别',
			          type: 'warning'
			     });
				return;
			}
			// 正则表达式判断电话号码的格式是否正确
			if(!/^1[3-9]\d{9}$/.test(this.user.phoneNum)){
				this.$message({
			          message: '请输入正确的电话号码',
			          type: 'warning'
			     });
				return;
			}
			if(!this.user.birthDay){
				this.$message({
			          message: '请输入出生日期',
			          type: 'warning'
			     });
				return;
			}
			this.userData.push(this.user)
			this.user={}
		},

		//删除一组数据
		handleDeleteData: function(idx) {
        this.$confirm('确认删除该数据？')
          .then(_ => {
            this.userData.splice(idx,1)
          })
          .catch(_ => {})
		console.log(idx)

		},

		//编辑数据
		handleEditData: function(row,idx) {
			this.editUser = row;
			this.indexOfUser = idx;
			this.dialogVisible = true;
			
		},

		//关闭弹窗
		handleClose: function() {
			this.dialogVisible = false;
		},

		handleConfirm: function() {
			this.dialogVisible = false;
			Vue.set(this.userData, this.indexOfUser, this.editUser)

			//this.userData = this.editUser;  也可以实现
		}
	}

})