'use strict';

/**
 * Agency.js controller
 *
 * @description: A set of functions called "actions" for managing `Agency`.
 */

module.exports = {

  /**
   * Retrieve agency records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.agency.search(ctx.query);
    } else {
      return strapi.services.agency.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a agency record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.agency.fetch(ctx.params);
  },

  /**
   * Count agency records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.agency.count(ctx.query);
  },

  /**
   * Create a/an agency record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.agency.add(ctx.request.body);
  },

  /**
   * Update a/an agency record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.agency.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an agency record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.agency.remove(ctx.params);
  }
};
