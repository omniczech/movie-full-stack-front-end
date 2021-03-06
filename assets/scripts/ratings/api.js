'use strict'

const config = require('../config')
const store = require('../store')

const createReview = (data) => {
  return $.ajax({
    url: config.apiUrl + '/movie_ratings',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateReview = (data) => {
  return $.ajax({
    url: config.apiUrl + '/movie_ratings/' + data.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {movie_rating: data.movie_rating}
  })
}

const showReview = (data) => {
  return $.ajax({
    url: config.apiUrl + '/user-ratings/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteReview = (data) => {
  return $.ajax({
    url: config.apiUrl + '/movie_ratings/' + data,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const editButtonClick = (data) => {
  return $.ajax({
    url: config.apiUrl + '/movie_ratings/' + data,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createReview,
  updateReview,
  showReview,
  deleteReview,
  editButtonClick
}
