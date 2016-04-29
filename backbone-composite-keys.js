/**
 * @preserve backbone.js composite keys addin v0.0.1
 * @author Alexandr Dolgov (<dolgof@gmail.com>)
 */
/*jslint browser: true, nomen: true*/
/*global _*/
(function () {
	'use strict';

	var /**
		 * Getting array of specified attribute values
		 */
		getAttributesValues = function (attrIds, attrs) {
			if (_.isString(attrIds)) {
				return attrs[attrIds];
			}
			var name, val, i, values = [];
			for (i = 0; i < attrIds.length; i++) {
				name = attrIds[i];
				if ((val = attrs[name]) == null) {
					return void 0;
				}
				values.push(val);
			}
			return values;
		},
		/**
		 * Generating a composite identifier
		 */
		generateCompositeId = function (attrIds, attrs) {
			var values = getAttributesValues(attrIds, attrs);
			// Generate identifier only if the values of all attributes contained in it are set
			if (values.length === attrIds.length) {
				return values.join('-');
			}
			return void 0;
		};

	_.extend(Backbone.Model.prototype, {
		// Modification for the composite id (added the ability to take an array of attribute names and then return composite identifier)
		get: function (attrId) {
			if (_.isArray(attrId)) {
				return generateCompositeId(attrId, this.attributes);
			}
			return this.attributes[attrId];
		}
	});

	_.extend(Backbone.Collection.prototype, {
		// Modification to get a composite model id (adds the ability to return a composite identifier)
		modelId: function (attrs) {
			if (_.isArray(this.model.prototype.idAttribute)) {
				return generateCompositeId(this.model.prototype.idAttribute, attrs);
			}
			return attrs[this.model.prototype.idAttribute || 'id'];
		}
	});
}());
