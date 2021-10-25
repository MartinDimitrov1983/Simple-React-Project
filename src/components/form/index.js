import React from 'react'
import styles from './index.module.css'
import Input from '../input'
import Button from '../button'

const Form = ({ handleSubmit, properties, setProperties }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.title}>Edit properties</p>
            <Input
                id="name"
                type="text"
                name="name"
                placeHolder="Name"
                label="Name"
                value={properties?.name}
                onChange={(e) =>
                    setProperties({ ...properties, name: e.target.value })
                }
            />
            <Input
                id="plan"
                type="text"
                name="plan"
                placeHolder="Plan Number"
                label="Plan Number"
                value={properties?.plan}
                onChange={(e) =>
                    setProperties({ ...properties, plan: e.target.value })
                }
            />
            <Input
                id="units"
                type="number"
                name="units"
                placeHolder="Units"
                label="Units"
                value={properties?.units}
                onChange={(e) =>
                    setProperties({ ...properties, units: e.target.value })
                }
            />
            <Input
                id="city"
                type="text"
                name="city"
                placeHolder="City"
                label="City"
                value={properties?.city}
                onChange={(e) =>
                    setProperties({ ...properties, city: e.target.value })
                }
            />
            <Input
                id="region"
                type="number"
                name="region"
                placeHolder="Region"
                label="Region"
                value={properties?.region}
                onChange={(e) =>
                    setProperties({ ...properties, region: e.target.value })
                }
            />
            <Input
                id="manager"
                type="number"
                name="manager"
                placeHolder="Manager"
                label="Manager"
                value={properties?.manager}
                onChange={(e) =>
                    setProperties({ ...properties, manager: e.target.value })
                }
            />
            <Input
                id="previous-manager"
                type="number"
                name="previousManager"
                placeHolder="Previous Manager"
                label="Previous Manage"
                value={properties?.previousManger}
                onChange={(e) =>
                    setProperties({
                        ...properties,
                        previousManger: e.target.value,
                    })
                }
            />
            <Input
                id="management-company"
                type="text"
                name="managementCompany"
                placeHolder="Management Company"
                label="Management Company"
                value={properties?.managementCompany}
                onChange={(e) =>
                    setProperties({
                        ...properties,
                        managementCompany: e.target.value,
                    })
                }
            />
            <Input
                id="plan-registered"
                type="date"
                name="planRegistered"
                placeHolder="Plan Registered"
                label="Plan Registered"
                value={properties?.planRegistered}
                onChange={(e) =>
                    setProperties({
                        ...properties,
                        planRegistered: e.target.value,
                    })
                }
            />
            <Input
                id="address"
                type="text"
                name="address"
                placeHolder="Address"
                label="Address"
                value={properties?.address}
                onChange={(e) =>
                    setProperties({ ...properties, address: e.target.value })
                }
            />
            <Input
                id="account"
                type="text"
                name="account"
                placeHolder="Account"
                label="Account"
                value={properties?.account}
                onChange={(e) =>
                    setProperties({ ...properties, account: e.target.value })
                }
            />
            <Input
                id="abn"
                type="text"
                name="abn"
                placeHolder="abn"
                label="abn"
                value={properties?.abn}
                onChange={(e) =>
                    setProperties({ ...properties, abn: e.target.value })
                }
            />
            <Button title="Save" type="submit" />
        </form>
    )
}

export default Form
