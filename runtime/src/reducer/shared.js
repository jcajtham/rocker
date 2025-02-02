import { constants } from "@lastui/rocker/platform";

const initialState = {
	meta: {},
	available: [],
	loaded: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case constants.SET_AVAILABLE_MODULES: {
			const meta = {};
			const available = [];
			const loaded = {};
			for (const item of action.payload.modules) {
				if (!meta[item.id]) {
					available.push(item.id)
				}
				meta[item.id] = item.meta || {};
				loaded[item.id] = Boolean(state.loaded[item.id]);
			}
			return {
				meta,
				available,
				loaded,
			};
		}
		case constants.MODULE_LOADED: {
			const nextLoaded = { ...state.loaded };
			nextLoaded[action.payload.id] = true;
			return {
				meta: state.meta,
				available: state.available,
				loaded: nextLoaded,
			};
		}
		case constants.MODULE_UNLOADED: {
			const nextLoaded = { ...state.loaded };
			nextLoaded[action.payload.id] = false;
			return {
				meta: state.meta,
				available: state.available,
				loaded: nextLoaded,
			};
		}
		default: {
			return state;
		}
	}
};