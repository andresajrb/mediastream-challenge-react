const applyDiscountRule = ( { m, discount }, total = 0, cart ) => {
    const cartForDiscount = cart.filter( movie => m.includes( movie.id ) );

    if (cartForDiscount.length === m.length) {
      const multiplierDiscount = getMultiplierDiscount(cartForDiscount);
      return total - (discount * multiplierDiscount)
    }

    return total;
}

const getMultiplierDiscount = ( cartForDiscount ) => cartForDiscount.reduce( 
    ( prev, curr ) => ( prev < curr.quantity ? prev : curr.quantity ), 
    cartForDiscount[0].quantity 
);

export const getTotalWithDiscount = ( discountRulesArray = [], total, cart ) => {
    let totalWithDiscount = total;

    for (const rule of discountRulesArray) {
        totalWithDiscount = applyDiscountRule( rule, totalWithDiscount, cart );
    }

    return totalWithDiscount;
}