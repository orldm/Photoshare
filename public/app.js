/*jslint sloppy: true, nomen: true, regexp: true, browser: true, es5: true */
/*globals Backbone, USER, $, _, console, FormData */
/*

server - user accounts

+ a user logs in
a user can follow other users
+ a user can post photos, which upload by ajax.
a user can view their photos
a user can view the photos of those they follow.
a user can comment on photos.


sign up
add photos
follow others
comment on photos
*/

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
