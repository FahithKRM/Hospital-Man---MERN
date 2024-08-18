import logo from '../assets/logo.png'
import header_1 from '../assets/header_1.png'

export const assets = {
    logo,
    header_1,
}

export const services_list =[
    {
        ser_image: header_1,
        ser_name: "Cardiology",
        ser_desc: "Heart and blood vessel care"
    },
    {
        ser_image: header_1,
        ser_name: "Neurology",
        ser_desc: "Nervous system and brain health"
    },
    {
        ser_image: header_1,
        ser_name: "Orthopedics",
        ser_desc: "Bone and muscle care"
    },
    {
        ser_image: header_1,
        ser_name: "Pediatrics",
        ser_desc: "Child and adolescent care"
    },
    {
        ser_image: header_1,
        ser_name: "Gynecology",
        ser_desc: "Women's reproductive health"
    }
]


export const appoinment_list = [
    {
        "app_id": "A1",
        "patient_name": "John Doe",
        "doctor_name": "Dr. Alice Smith",
        "appointment_date": "2024-08-05",
        "appointment_time": "10:00 AM",
        "department": "Cardiology",
        "status": "Confirmed"
    },
    {
        "app_id": "A2",
        "patient_name": "Jane Roe",
        "doctor_name": "Dr. Bob Johnson",
        "appointment_date": "2024-08-06",
        "appointment_time": "11:00 AM",
        "department": "Neurology",
        "status": "Pending"
    },
    {
        "app_id": "A3",
        "patient_name": "Michael Smith",
        "doctor_name": "Dr. Clara Lee",
        "appointment_date": "2024-08-07",
        "appointment_time": "01:00 PM",
        "department": "Orthopedics",
        "status": "Cancelled"
    },
    {
        "app_id": "A4",
        "patient_name": "Emily Davis",
        "doctor_name": "Dr. David Kim",
        "appointment_date": "2024-08-08",
        "appointment_time": "09:00 AM",
        "department": "Pediatrics",
        "status": "Confirmed"
    },
    {
        "app_id": "A5",
        "patient_name": "Christopher Brown",
        "doctor_name": "Dr. Eva Williams",
        "appointment_date": "2024-08-09",
        "appointment_time": "03:00 PM",
        "department": "Gynecology",
        "status": "Pending"
    }
]


export const doctor_list = [
    {
        "doc_id": "D1",
        "doc_name": "Dr. Alice Smith",
        "specialization": "Cardiology",
        "experience": "15 years",
        "contact": "alice.smith@example.com",
        "availability": "Monday to Friday, 9:00 AM - 5:00 PM"
    },
    {
        "doc_id": "D2",
        "doc_name": "Dr. Bob Johnson",
        "specialization": "Neurology",
        "experience": "10 years",
        "contact": "bob.johnson@example.com",
        "availability": "Monday to Thursday, 10:00 AM - 4:00 PM"
    },
    {
        "doc_id": "D3",
        "doc_name": "Dr. Clara Lee",
        "specialization": "Orthopedics",
        "experience": "8 years",
        "contact": "clara.lee@example.com",
        "availability": "Tuesday to Friday, 1:00 PM - 6:00 PM"
    },
    {
        "doc_id": "D4",
        "doc_name": "Dr. David Kim",
        "specialization": "Pediatrics",
        "experience": "12 years",
        "contact": "david.kim@example.com",
        "availability": "Monday to Friday, 9:00 AM - 3:00 PM"
    },
    {
        "doc_id": "D5",
        "doc_name": "Dr. Eva Williams",
        "specialization": "Gynecology",
        "experience": "20 years",
        "contact": "eva.williams@example.com",
        "availability": "Wednesday to Saturday, 11:00 AM - 5:00 PM"
    }
]


export const person_list = [
    {
        "person_id": "P1",
        "name": "John Doe",
        "age": 45,
        "gender": "Male",
        "contact": "john.doe@example.com",
        "address": "123 Main St, Anytown, USA"
    },
    {
        "person_id": "P2",
        "name": "Jane Roe",
        "age": 34,
        "gender": "Female",
        "contact": "jane.roe@example.com",
        "address": "456 Elm St, Anytown, USA"
    },
    {
        "person_id": "P3",
        "name": "Michael Smith",
        "age": 29,
        "gender": "Male",
        "contact": "michael.smith@example.com",
        "address": "789 Oak St, Anytown, USA"
    },
    {
        "person_id": "P4",
        "name": "Emily Davis",
        "age": 6,
        "gender": "Female",
        "contact": "emily.davis@example.com",
        "address": "101 Pine St, Anytown, USA"
    },
    {
        "person_id": "P5",
        "name": "Christopher Brown",
        "age": 52,
        "gender": "Male",
        "contact": "christopher.brown@example.com",
        "address": "202 Maple St, Anytown, USA"
    }
]


export const prescription_list = [
    {
        "pres_id": "PR1",
        "patient_id": "P1",
        "patient_name": "John Doe",
        "doctor_name": "Dr. Alice Smith",
        "disease": "Hypertension",
        "medicines": [
            {
                "med_name": "Aspirin",
                "dosage": "75mg",
                "frequency": "Once daily",
                "duration": "30 days"
            },
            {
                "med_name": "Metoprolol",
                "dosage": "50mg",
                "frequency": "Twice daily",
                "duration": "30 days"
            }
        ],
        "date": "2024-08-05",
        "notes": "Follow-up in 1 month"
    },
    {
        "pres_id": "PR2",
        "patient_id": "P2",
        "patient_name": "Jane Roe",
        "doctor_name": "Dr. Bob Johnson",
        "disease": "Neuropathy",
        "medicines": [
            {
                "med_name": "Gabapentin",
                "dosage": "300mg",
                "frequency": "Three times daily",
                "duration": "15 days"
            }
        ],
        "date": "2024-08-06",
        "notes": "Monitor symptoms and adjust dosage if necessary"
    },
    {
        "pres_id": "PR3",
        "patient_id": "P3",
        "patient_name": "Michael Smith",
        "doctor_name": "Dr. Clara Lee",
        "disease": "Muscle Strain",
        "medicines": [
            {
                "med_name": "Ibuprofen",
                "dosage": "400mg",
                "frequency": "Every 6 hours as needed",
                "duration": "7 days"
            }
        ],
        "date": "2024-08-07",
        "notes": "Rest and apply ice to affected area"
    },
    {
        "pres_id": "PR4",
        "patient_id": "P4",
        "patient_name": "Emily Davis",
        "doctor_name": "Dr. David Kim",
        "disease": "Ear Infection",
        "medicines": [
            {
                "med_name": "Amoxicillin",
                "dosage": "500mg",
                "frequency": "Twice daily",
                "duration": "10 days"
            }
        ],
        "date": "2024-08-08",
        "notes": "Complete full course of antibiotics"
    },
    {
        "pres_id": "PR5",
        "patient_id": "P5",
        "patient_name": "Christopher Brown",
        "doctor_name": "Dr. Eva Williams",
        "disease": "Type 2 Diabetes",
        "medicines": [
            {
                "med_name": "Metformin",
                "dosage": "500mg",
                "frequency": "Twice daily",
                "duration": "30 days"
            }
        ],
        "date": "2024-08-09",
        "notes": "Monitor blood sugar levels regularly"
    }
]
