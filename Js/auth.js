
(function(){

const KEY="virat_x_user";

function getUser(){
  try{
    return JSON.parse(localStorage.getItem(KEY)||"null");
  }catch(e){
    return null;
  }
}

function saveUser(user){
  localStorage.setItem(KEY,JSON.stringify(user));
}

window.VXAuth={
  user:getUser(),

  signup:function(name,email,password){
    if(!name||!email||!password) return false;

    const user={
      name:name.trim(),
      email:email.trim().toLowerCase(),
      password:password,
      joined:new Date().toISOString()
    };

    saveUser(user);
    this.user=user;
    return true;
  },

  login:function(email,password){
    const user=getUser();

    if(!user) return false;

    if(
      user.email===email.trim().toLowerCase() &&
      user.password===password
    ){
      this.user=user;
      return true;
    }

    return false;
  },

  logout:function(){
    localStorage.removeItem(KEY);
    location.href="login.html";
  },

  isLoggedIn:function(){
    return !!getUser();
  },

  get:function(){
    return getUser();
  }
};

})();
