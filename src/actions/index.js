import * as auth from './auth';
import * as cinema from './cinema';
import * as movie from './movie';
import * as shop from './shop'

module.exports = {
    ...auth,
    ...cinema,
    ...movie,
    ...shop
}