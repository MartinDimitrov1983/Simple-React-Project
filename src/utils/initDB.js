const initDB = () => {
    const properties = [
        {
            id: 0,
            name: 'Sofia',
            plan: '111',
            units: 0,
            city: 'Sofia',
            region: 0,
            manager: 0,
        },
        {
            id: 1,
            name: 'Plovdiv',
            plan: '222',
            units: 0,
            city: 'Plovdiv',
            region: 0,
            manager: 0,
        },
        {
            id: 2,
            name: 'Nova',
            plan: '333',
            units: 0,
            city: 'Nova Zagora',
            region: 1,
            manager: 1,
        },
    ]

    const region = [
        {
            id: 0,
            name: 'Queensland',
        },
        {
            id: 1,
            name: 'Sliven',
        },
    ]

    const manager = [
        {
            id: 0,
            firstName: 'John',
            lastName: 'Smith',
            managedSince: '2020-12-12',
        },
        {
            id: 1,
            firstName: 'Jane',
            lastName: 'Dow',
            managedSince: '2021-01-01',
        },
    ]

    const extendedProperties = [
        {
            id: 0,
            name: 'Sofia',
            plan: '111',
            units: 0,
            city: 'Sofia',
            region: 0,
            manager: 0,
            previousManager: 0,
            managementCompany: 'Some Company',
            planRegistered: '2020-12-12',
            address: 'address',
            account: 'acc',
            abn: 'ABN',
        },
        {
            id: 1,
            name: 'Plovdiv',
            plan: '222',
            units: 0,
            city: 'Plovdiv',
            region: 0,
            manager: 0,
            previousManager: 0,
            managementCompany: 'New Company',
            planRegistered: '2020-10-10',
            address: 'add',
            account: 'acc',
            abn: 'ABN',
        },
        {
            id: 2,
            name: 'Nova',
            plan: '333',
            units: 0,
            city: 'Nova Zagora',
            region: 1,
            manager: 1,
            previousManager: 0,
            managementCompany: 'Other Company',
            planRegistered: '2019-05-05',
            address: 'address',
            account: 'acc',
            abn: 'ABN',
        },
    ]

    localStorage.setItem('properties', JSON.stringify(properties))
    localStorage.setItem('region', JSON.stringify(region))
    localStorage.setItem('manager', JSON.stringify(manager))
    localStorage.setItem(
        'extendedProperties',
        JSON.stringify(extendedProperties)
    )
}

export default initDB
