

function addTradeInSection(deviceType, tradeValues, imageUrl) {
    const container = document.querySelector('trade-content'); // Adjust the selector as needed

    const sectionHtml = `
        <section class="trade-section mx-3 mb-4" id="${deviceType}-content">
            <div class="trade trading-value">
                <div class="title">
                    <h1 class="trading-price-title">
                        Get ${tradeValues.range} when you trade in a ${deviceType}.
                    </h1>
                </div>
                <div class="price-price-range">
                    ${tradeValues.devices.map(device => `
                        <div class="price">
                            <div class="item-title">
                                <h3>${device.name}</h3>
                            </div>
                            <div class="price-range">
                                <h3>Up to ${device.value}</h3>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="all-value">
                    <a href="#" >See all ${deviceType} values ⊕</a>
                </div>
                <div class="btn-container">
                    <a href="#" class="btn btn-primary">Find all your trade-in values</a>
                </div>
            </div>
            <div class="trade trade-item-title d-flex">
                <div class="img-container d-flex p-3">
                    <img src="${imageUrl}" alt="" />
                </div>
            </div>
        </section>
    `;

    container.innerHTML += sectionHtml; // Append the new section to the container
}

// Example usage:
addTradeInSection('iPad', {
    range: '$40-$580',
    devices: [
        {name : 'iPhone', value : '$100-$200'},
        { name: 'iPad Pro', value: '$580' },
        { name: 'iPad Air', value: '$350-$400' },
        { name: 'iPad Mini', value: '$150-$200' },
        {name : 'Mac', value : '$100-$200'},
    ]
}, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphones-value-tradein-202309_GEO_US?wid=460&hei=458&fmt=png-alpha&.v=1693339715015');