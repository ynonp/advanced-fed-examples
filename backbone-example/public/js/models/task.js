(function (global) {

  global.mytask.model.Task = Backbone.Model.extend({
     defaults: {
       text: "Take over the world",
       done: false,
       assigned_to: ['nobody'],
       description: "Farm-to-table commodo chillwave master cleanse enim truffaut, yr tempor forage marfa bespoke irony. Adipisicing ad dolore photo booth, you probably haven't heard of them neutra meggings helvetica pug. Stumptown est et, banjo master cleanse authentic +1 quinoa ut sustainable bushwick laboris fap. Proident sriracha exercitation, est fap banksy twee eu. Dolore bicycle rights whatever brooklyn, godard meggings proident. Locavore nihil high life, quinoa jean shorts ethnic dolore eu swag seitan. Deserunt flannel actually cardigan, aesthetic cillum labore seitan kogi."
     }
  });

  global.mytask.collection.Tasks = Backbone.Collection.extend({
    model: global.mytask.model.Task,
    url: '/tasks'
  }) ;


}(this));