import instance from "./instance";

import categories from "./categories";
import positions from "./positions";

export default {
	categories: categories(instance),
	positions: positions(instance)
}
