Ti.include(
    'sqsApi.js'
);

windowFunctions['SQS'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
          'createQueue',
          'Deleting Queue',
          'listQueues',
          'getQueueUrl',
          'Add Permission',
          'Remove Permission',
          'setQueueAttributes',
          'getQueueAttributes',
          'sendMessage',
          'sendMessageBatch',
          'receiveMessage',
          'deleteMessage',
          'deleteMessageBatch',
          'changeMessageVisibility',
          'changeMessageVisibilityBatch',
          
          
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};