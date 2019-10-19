
/**
 * Adds this jQuery interactivity to index.html:
 * 1.	Enter items to purchase by entering text and hitting "Enter" or clicking the "Add item" button.
 * 2.	Check and uncheck items on the list by clicking the "check" button
 * 3.	permanently remove items from the list by clicking the "delete" button
 */

function handleShoppingListEvents() {
	// 1. Enter items to purchase by entering text and hitting "Enter" or clicking the "Add item" button.
	handleNewItem();
	// 2. Check and uncheck items on the list by clicking the "check" button
	handleCheckItem();
	// 3. permanently remove items from the list by clicking the "delete" button
	handleDeleteItem();
}

// 1. Enter items to purchase by entering text and hitting "Enter" or clicking the "Add item" button.
function handleNewItem() {
	// listen for a form submission via button click
	$('#js-shopping-list-form').on('submit', function(e) {
		e.preventDefault();
		// store submission value in newItem
		const newItem = $(this).find('#shopping-list-entry').val();
		if (newItem == "") {
			alert(`Can't be empty.`);
		} else {
			// append the shopping list <ul> with an <li> for the newItem
			$('.shopping-list').append(
				`<li>
					<span class="shopping-item">${newItem}</span>
					<div class="shopping-item-controls">
						<button class="shopping-item-toggle">
							<span class="button-label">check</span>
						</button>
						<button class="shopping-item-delete">
							<span class="button-label">delete</span>
						</button>
					</div>
				</li>`
			);
			// clear the entry input to prepare for next input submission
			$('#shopping-list-entry').val('');
			}
	});
}
	
// 2. Check and uncheck items on the list by clicking the "check" button
function handleCheckItem() {
	// listen on <ul> for toggle button clicks
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
		// traverse to the span.shopping-item element
		const item = $(this).closest('li').find('.shopping-item');
		// manipulate span.shopping-item by toggling the .shopping-item__checked class
		item.toggleClass('shopping-item__checked');
	});
}

// 3. permanently remove items from the list by clicking the "delete" button
function handleDeleteItem() {
	// listen on <ul> for delete button clicks
	$('.shopping-list').on('click', '.shopping-item-delete', function(e) {
		// traverse to the closest ancestor <li>
		const item = $(this).closest('li');
		// manipulate the <li> by removing it
		item.remove();
	});
}
	
// call event listener handler function on document load 
$(handleShoppingListEvents)




