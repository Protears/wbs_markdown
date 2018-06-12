// This html plugin takes the markdown's html and makes replacements to make the page interactive
module.exports = function(html, config) {
  html = html.replace(/\>\[ \]\s/g, ":work_item='true' :done='false'><tick-display :done='false'></tick-display> ");
  // replace "checked" items with "done" attribute added to "<li>" and add a "tick-display" component
  html = html.replace(/\>\[x\]\s/ig, ":work_item='true' :done='true'><tick-display :done='true'></tick-display> ");
  html = html.replace(/\<li\s?/ig, '<wbs-item v-on:register="registered" v-on:togglestory="toggleStory" :story_work="story_work" :active_stories="active_stories" :stories="active_stories" :showmode="show_mode" ');
  html = html.replace(/\<\/li\>/ig, '</wbs-item>');
  // convert for the display-filter component. Want to preserve optional attributes (doesn't have greedy, so it only alters the first match)
  html = html.replace(/\<p id="display-filter"/i, '<display-filter ');
  html = html.replace(/\>filter\<\/p>/i, 'v-on:change="filterChanged"></display-filter>');
  html = html.replace('<p id="stories-chart">chart</p>', '<stories-chart :story_work="story_work" :stories="active_stories"></stories-chart>');
  html = html.replace('<p id="stories-table">table</p>', '<stories-table :story_work="story_work" :stories="active_stories"></stories-table>');
  html = html.replace('<p id="stories-toggle">toggle</p>', '<stories-toggle v-on:toggle="toggleAllStories"></stories-toggle>');
  html = html.replace(/<p id="stories-total"\s?(group="(.+)")?>totals<\/p>/ig, function(match_text, match_1, group_match, _offset, _full_body) {
    var groupStr = ""
    if (group_match) {
      groupStr = 'group="' + group_match + '" '
    }
    return '<stories-total ' + groupStr + ':story_work="story_work" :stories="active_stories" :story_groups="story_groups"></stories-total>'
  });
  return html;
};
