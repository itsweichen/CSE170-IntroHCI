Template.my_meals.helpers({
    my_meals: function () {
        return Meals.find({}, {sort: {createdAt: -1}});
    }
});