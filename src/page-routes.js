'use strict';

const express = require('express'),
      router = express.Router();

router.get('/home-video', function(req, res, next) {
    res.render("pages/home-video");
});

router.get('/home-fullwidth', function(req, res, next) {
    res.render("pages/home-fullwidth");
});

router.get('/home-landing-page', function(req, res, next) {
    res.render("pages/home-landing-page");
});

router.get('/shortcodes', function(req, res, next) {
    res.render("pages/shortcodes");
});

router.get('/blog-classic', function(req, res, next) {
    res.render("blogs/blog-classic");
});

router.get('/blog-fullwidth', function(req, res, next) {
    res.render("blogs/blog-fullwidth");
});

router.get('/blog-columns', function(req, res, next) {
    res.render("blogs/blog-columns");
});

router.get('/blog-masonry', function(req, res, next) {
    res.render("blogs/blog-masonry");
});

router.get('/blog-clean', function(req, res, next) {
    res.render("blogs/blog-clean");
});

router.get('/blog-single-post-1', function(req, res, next) {
    res.render("blogs/blog-single-post-1");
});

router.get('/blog-single-post-2', function(req, res, next) {
    res.render("blogs/blog-single-post-2");
});

router.get('/blog-single-post-3', function(req, res, next) {
    res.render("blogs/blog-single-post-3");
});

router.get('/projects/project1', function(req, res, next) {
    res.render("projects/project1");
});

router.get('/projects/project2', function(req, res, next) {
    res.render("projects/project2");
});

router.get('/projects/project3', function(req, res, next) {
    res.render("projects/project3");
});

router.get('/projects/project4', function(req, res, next) {
    res.render("projects/project4");
});

router.get('/projects/project5', function(req, res, next) {
    res.render("projects/project5");
});

router.get('/projects/project6', function(req, res, next) {
    res.render("projects/project6");
});

router.get('/projects/project7', function(req, res, next) {
    res.render("projects/project7");
});

router.get('/projects/project8', function(req, res, next) {
    res.render("projects/project8");
});

router.get('/projects/project9', function(req, res, next) {
    res.render("projects/project9");
});

router.get('/projects/project10', function(req, res, next) {
    res.render("projects/project10");
});

router.get('/projects/project11', function(req, res, next) {
    res.render("projects/project11");
});

router.get('/projects/project12', function(req, res, next) {
    res.render("projects/project12");
});

router.get('/projects/loadMore', function(req, res, next) {
    res.render("projects/loadMore");
});

module.exports = router;