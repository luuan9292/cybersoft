function UserList() {
    this.userArray = [];
    this.addUser = function(user) {
        this.userArray.push(user);
    }
    this.findIndex = function(username) {
        for(var i = 0; i < this.userArray.length; i++) {
            if(this.userArray[i].TaiKhoan === username) {
                return i;
            }
        }
        return -1;
    }
    this.deleteUser = function(username) {
        var index = this.findIndex(username);
        // if(index !== -1) {
        //     this.userArray.slice(index, 1);
        // }
        index !== -1 && this.userArray.splice(index, 1);
    }
}