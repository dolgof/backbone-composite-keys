# backbone-composite-keys

Addon for the backbone.js, allows you to create a model with composite keys, and a collection of them.

**Attention!** I use this mechanism for models with separate endpoints for CRUD operations (e.g. don't use model.id in this operations)

Dependencies: underscore.js, backbone.js

How to:

Just two steps!

1. add "backbone-composite-keys.js" into your project after
2. initialize the parameter of the model "idAttribute" with an array of names of the attributes, which is parts of the composite identifier.

Example:
```javascript
	var ResourceLocalization = Backbone.Model.extend({
		idAttribute: ['ResourceId', 'LangId'], 
		defaults: {
			ResourceId: '', // Localizable resource id
			LangId: '', // Localization language id
			ResourceValue: '' // Localized resource value
		}
	});
```
