# Payment
+ account_id
+ amount_paid
+ date_paid
+ company_id
+ **payment_type**
+ **payment_object**

# SojoEvent
+ name
+ date
+ **start_time**
+ **end_time**
+ _description_
+ attendees
+ **is_private**

# Lease
+ rent_amount
+ lease_type
+ start_date
+ end_date
+ account_id

# Profile
+ full_name
+ phone
+ has_bill_pay_setup
+ has_signed_lease
+ sojo_events [ ]
+ account_id
+ **account_picture_url**

# Unit
+ unit_index
+ building_index
+ apt_complex_address
+ maintenance_email
+ landlord_email
+ account_id

# Utility
+ company_name
+ url
+ due_date
+ account_id
