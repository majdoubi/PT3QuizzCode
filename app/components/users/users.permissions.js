// Let's imagine we have a User service which has information about the current user in the session
// and is undefined if no session is active
//
// We will define the following roles:
// anonymous: When there is not user currenly logged in
// normal: A user with isAdmin = false
// admin: A user with isAdmin = true

angular.module('quizzCode.permissions', [
    'permission'
])
    .run(function (Permission, User) {
        Permission
      .defineRole('anonymous', function () {
        //return false;
        return !User;
      })
      .defineRole('enseignant', function(){
          //return true;
          return User.type === 'enseignant';
      });
      /*
      .defineRole('administrateur', function(stateParams){
        return User.getType === 'administrateur';
      })
      .defineRole('etudiant', function(stateParums){
          return User.getType === 'etudiant';
      });
      */
});
