if (!window.indexedDB) {
	window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

const databaseRequest = window.indexedDB.open("WeightDatabase", 1);

databaseRequest.onerror = function(event) {
	console.log("Error loading WeightDatabase");
};
databaseRequest.onsuccess = function(event) {
	console.log("databaseRequest opened")

	if(window.weight == null) window.weight = {};
	window.weight.database = event.target.result;
};

function databaseAddWeight(weight) {
	const transaction = window.weight.database.transaction(["weight"], "readwrite");
	transaction.oncomplete = function(event) {
	};
	transaction.onerror = function(event) {
	};
	
	const objectStore = transaction.objectStore("weight");
	const addRequest = objectStore.add({ id: new Date(), weight: weight, });
	addRequest.onerror = function(event) {
	};
	addRequest.onsuccess = function(event) {
	};
}

function getAllWeights() {

}

databaseRequest.onupgradeneeded = function(event) { 
	const database = event.target.result;
	const objectStore = database.createObjectStore("weight", { keyPath: "id" });
	console.log('upgrade complete');
};

