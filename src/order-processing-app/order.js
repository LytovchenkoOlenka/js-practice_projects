"use strict";

const itemInput = document.getElementById("itemInput");
const quantityInput = document.getElementById("quantityInput");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const orderStatusParagraph = document.getElementById("orderStatus");

// --- Допоміжні функції для керування UI ---
function updateOrderStatusUI(message, isError = false) {
  orderStatusParagraph.textContent = message;
  orderStatusParagraph.style.color = isError ? "#ef4040" : "#ffffff";
  orderStatusParagraph.style.backgroundColor = isError ? "#4d2020" : "#333333";
  orderStatusParagraph.style.borderColor = isError ? "#ef4040" : "#444444";
}

function setUIState(isDisabled) {
  placeOrderBtn.disabled = isDisabled;
  itemInput.disabled = isDisabled;
  quantityInput.disabled = isDisabled;
}

updateOrderStatusUI("Очікування замовлення...");

placeOrderBtn.addEventListener("click", handlePlaceOrderClick);

function handlePlaceOrderClick() {
  const item = itemInput.value;
  const quantity = Number(quantityInput.value);

  console.log("Кнопка 'Замовити' натиснута!");

  setUIState(true);
  updateOrderStatusUI("Розміщення замовлення...");

  placeOrder(item, quantity)
    .then((orderData) => {
      console.log(
        `[Крок 1]Замовлення ${orderData.orderId} розміщено:`,
        orderData
      );
      updateOrderStatusUI(
        `Замовлення #${orderData.orderId} розміщено. Обробка платежу...`
      );
      // return orderData;
      return processPayment(orderData);
    })
    .then((processedOrder) => {
      console.log(
        `[Крок 2] Платіж оброблено для замовлення ${processedOrder.orderId}:`,
        processedOrder
      );
      updateOrderStatusUI(
        `Платіж оброблено (TRX: ${processedOrder.transactionId}). Оновлення складу...`
      );
      return updateInventory(processedOrder);
    })
    .then((finalOrderData) => {
      console.log(
        `[Крок 3] Склад оновлено успішно. Замовлення повністю оброблено:`,
        finalOrderData
      );
      updateOrderStatusUI(
        `Замовлення #${finalOrderData.orderId} повністю оброблено! 🎉`
      );
    })
    .catch((error) => {
      console.log(`Помилка на етапі розміщення замовлення:`, error);
      updateOrderStatusUI(`Помилка: ${error}`, true);
    })
    .finally(() => {
      setUIState(false);
      console.log("Спроба обробки замовлення завершена.");
    });
}

function placeOrder(item, quantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantity <= 0) {
        reject("Кількість товару має бути позитивною.");
      } else {
        const orderId = "ORD-" + Math.floor(Math.random() * 100000); // Генеруємо ID замовлення
        resolve({ orderId, item, quantity });
      }
    }, 1000);
  });
}

function processPayment(orderData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isPaymentFailed = Math.random() < 0.2;

      if (isPaymentFailed) {
        reject("Помилка обробки платежу. Спробуйте пізніше.");
      } else {
        const transactionId = "TRX-" + Math.floor(Math.random() * 100000);
        resolve({ ...orderData, transactionId, paymentStatus: "completed" });
      }
    }, 1500);
  });
}

function updateInventory(processedOrder) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isUpdatingFailed = Math.random() < 0.1;

      if (isUpdatingFailed) {
        reject("Помилка оновлення складу. Зверніться до підтримки.");
      } else {
        resolve({ ...processedOrder, inventoryUpdated: true });
      }
    }, 800);
  });
}
