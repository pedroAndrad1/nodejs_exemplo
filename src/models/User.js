const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
    //Faz a conexao com o banco de dados
    static init(sequelize) {
        super.init(
            //Os campos da tabela
            {
                name: DataTypes.STRING,
                password: DataTypes.STRING,
                email: DataTypes.STRING,
                islogged: DataTypes.BOOLEAN
            }, 
            {   //O sequelize para a conexao 
                sequelize,
                // Metodos que para executar operacoes no registro na criacao.
                // Neste caso, esta hasheando o password antes de criar o registro
                hooks: {
                    beforeCreate: (user) => {
                        const salt = bcrypt.genSaltSync();
                        user.password = bcrypt.hashSync(user.password, salt);
                    },
                },
            }
        )
    }

    static associate(models) {
        // 1 : n
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'address' });
        // n : n
        this.belongsToMany(models.Course, { foreignKey: 'user_id', through: 'user_courses', as: 'courses'});
    }

}

module.exports = User;