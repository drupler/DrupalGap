dg.theme_container = function(variables) {
  return '<div ' + dg.attributes(variables._attributes) + '>' +
      dg.render(variables._children) +
      '</div>';
};
dg.theme_entity_reference_label = function(variables) {
  var item = variables._item;
  return dg.l(item.target_id, item.url.replace(dg.path(), ''));
};
dg.theme_string = function(variables) {
  return variables._item.value;
};
dg.theme_number_integer = function(variables) {
  return variables._item.value;
};