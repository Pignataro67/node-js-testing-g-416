"use strict"

const chai = require('chai')

const bookshelf = require('../../app/db/bookshelf')
const User = require('../../app/models/user')
const supertest = require('supertest');

const expect = chai.expect

const mockUser = {
  email: 'email@email.com',
  name: 'Name',
  username: 'username'
}
