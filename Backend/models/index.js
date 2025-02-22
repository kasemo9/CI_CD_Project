const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class User extends Model {}
class School extends Model {}
class Favorite extends Model {}
class Major extends Model {}
class Tour extends Model {}
// class SchoolTour extends Model {}

User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

School.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fafsa: DataTypes.STRING,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    ownership: DataTypes.STRING,
    website: DataTypes.STRING,
    school_size: DataTypes.STRING,
    total_students: DataTypes.STRING,
    women: DataTypes.FLOAT,
    men: DataTypes.FLOAT,
    school_category: DataTypes.STRING,
    instate_tuition: DataTypes.STRING,
    outofstate_tuition: DataTypes.STRING,
    cost_books: DataTypes.STRING,
    cost_roomboard_oncampus: DataTypes.STRING,
    cost_roomboard_offcampus: DataTypes.STRING,
    open_admissions: DataTypes.INTEGER,
    admin_test_reqs: DataTypes.STRING,
    grad_earnings: DataTypes.STRING,    
}, {
    sequelize,
    timestamps: false,
});

Favorite.init({
    UserId: DataTypes.UUID,
    SchoolId: DataTypes.UUID,
},  {
    sequelize,
    timestamps: false,
});

Major.init({
    major: DataTypes.STRING,
    degree: DataTypes.STRING,
    SchoolId: DataTypes.INTEGER,
},  {
    sequelize,
    timestamps: false,
});

Tour.init({
    school: DataTypes.STRING,
    image: DataTypes.STRING,
    tour_url: DataTypes.STRING,
      
},  {
    sequelize,
    timestamps: false,
});

    
Major.belongsTo(School);
School.hasMany(Major);
Tour.belongsTo(School);
School.hasOne(Tour);
School.belongsToMany(User, {through: Favorite});
User.belongsToMany(School, {through: Favorite});

module.exports = {User, School, Favorite, Major, Tour}