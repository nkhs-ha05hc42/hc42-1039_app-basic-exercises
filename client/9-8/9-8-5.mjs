const deleteRecord = async (id) => {
    const fetchResult = await fetch(`http://localhost:3000/api/9-7/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!fetchResult.ok) {
        throw new Error(`HTTP error! Status: ${fetchResult.status}`);
    }

    const response = await fetchResult.json();
    
    if (response.status !== "success") {
        throw new Error(response.status);
    }

    alert("削除が完了しました！");
};

const getTargetId = () => {
    const inputFormElement = document.getElementById("target-id-form").elements;
    const id = parseInt(inputFormElement.id.value, 10);

    if (isNaN(id)) {
        throw new Error("idが入力されていないか無効な値です");
    }

    return id;
};

const clearFormData = () => {
    const inputFormElement = document.getElementById("target-id-form").elements;
    inputFormElement.id.value = "";
};

/**
 * ウィンドウ読み込み時の処理
 */
window.onload = () => {
    const deleteButtonElement = document.getElementById("delete-button");
    deleteButtonElement.addEventListener(
        "click",
        async () => {
            try {
                const targetId = getTargetId();
                await deleteRecord(targetId);
                clearFormData();
            } catch (err) {
                alert(err.message);
            }
        },
        false
    );
};