angular.module('quizzCode.permissions', [
        'permission'
    ])
    .run(function (Permission, User) {
        Permission
            .defineRole('anonymous', function () {
                return !User;
            })
            .defineRole('enseignant', function () {
                return User.type === 'enseignant';
            })
            .defineRole('administrateur', function () {
                return User.type === 'administrateur';
            })
            .defineRole('etudiant', function () {
                return User.type === 'etudiant';
            });
    });
