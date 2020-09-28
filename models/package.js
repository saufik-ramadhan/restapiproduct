var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var koliDataSchema = new Schema({
  koli_length: {
    type: Number,
    required: true,
  },
  awb_url: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  koli_chargeable_weight: {
    type: Number,
    required: true,
  },
  koli_width: {
    type: Number,
    required: true,
  },
  koli_surcharge: [String],
  koli_height: {
    type: Number,
    required: true,
  },
  updated_at: {
    type: String,
    required: true,
  },
  koli_description: {
    type: String,
    required: true,
  },
  koli_formula_id: {
    type: String,
    required: false,
  },
  connote_id: {
    type: String,
    required: true,
  },
  koli_volume: {
    type: Number,
    required: true,
  },
  koli_weight: {
    type: Number,
    required: true,
  },
  koli_id: {
    type: String,
    required: true,
  },
  koli_custom_field: {
    awb_sicepat: {
      type: String,
      required: false,
    },
    harga_barang: {
      type: String,
      required: false,
    },
  },
  koli_code: {
    type: String,
    required: true,
  },
});
var packageSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    transaction_id: {
      type: String,
      unique: true,
      required: true,
    },
    customer_name: {
      type: String,
      required: true,
      uppercase: true,
    },
    customer_code: {
      type: String,
      required: true,
    },
    transaction_amount: {
      type: String,
      required: true,
    },
    transaction_discount: {
      type: String,
      required: true,
    },
    transaction_additional_field: {
      type: String,
      required: false,
    },
    transaction_payment_type: {
      type: String,
      required: true,
    },
    transaction_state: {
      type: String,
      required: true,
    },
    transaction_code: {
      type: String,
      required: true,
      uppercase: true,
    },
    transaction_order: {
      type: Number,
      required: true,
    },
    location_id: {
      type: String,
      required: true,
    },
    organization_id: {
      type: Number,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
    updated_at: {
      type: String,
      required: true,
    },
    transaction_payment_type_name: {
      type: String,
      required: true,
    },
    transaction_cash_amount: {
      type: Number,
      required: true,
    },
    transaction_cash_change: {
      type: Number,
      required: true,
    },
    customer_attribute: {
      Nama_Sales: {
        type: String,
        required: true,
      },
      TOP: {
        type: String,
        required: true,
      },
      Jenis_Pelanggan: {
        type: String,
        required: true,
      },
    },
    connote: {
      connote_id: {
        type: String,
        required: true,
      },
      connote_number: {
        type: Number,
        required: true,
      },
      connote_service: {
        type: String,
        required: true,
      },
      connote_service_price: {
        type: Number,
        required: true,
      },
      connote_amount: {
        type: Number,
        required: true,
      },
      connote_code: {
        type: String,
        required: true,
      },
      connote_booking_code: {
        type: String,
        required: false,
      },
      connote_order: {
        type: Number,
        required: true,
      },
      connote_state: {
        type: String,
        required: true,
      },
      connote_state_id: {
        type: Number,
        required: true,
      },
      zone_code_from: {
        type: String,
        required: true,
      },
      zone_code_to: {
        type: String,
        required: true,
      },
      surcharge_amount: {
        type: Number,
        required: false,
      },
      transaction_id: {
        type: String,
        required: true,
        unique: true,
      },
      actual_weight: {
        type: Number,
        required: true,
      },
      volume_weight: {
        type: Number,
        required: true,
      },
      chargeable_weight: {
        type: Number,
        required: true,
      },
      created_at: {
        type: String,
        required: true,
      },
      updated_at: {
        type: String,
        required: true,
      },
      organization_id: {
        type: Number,
        required: true,
      },
      location_id: {
        type: String,
        required: true,
      },
      connote_total_package: {
        type: String,
        required: true,
      },
      connote_surcharge_amount: {
        type: String,
        required: true,
      },
      connote_sla_day: {
        type: String,
        required: true,
      },
      location_name: {
        type: String,
        required: true,
      },
      location_type: {
        type: String,
        required: true,
      },
      source_tariff_db: {
        type: String,
        required: true,
      },
      id_source_tariff: {
        type: String,
        required: true,
      },
      pod: {
        type: Number,
        required: false,
      },
      history: [String],
    },
    connote_id: {
      type: String,
      required: true,
    },
    origin_data: {
      customer_name: {
        type: String,
        required: true,
      },
      customer_address: {
        type: String,
        required: true,
      },
      customer_email: {
        type: String,
        required: true,
      },
      customer_phone: {
        type: String,
        required: true,
      },
      customer_address_detail: {
        type: String,
        required: false,
      },
      customer_zip_code: {
        type: String,
        required: true,
      },
      zone_code: {
        type: String,
        required: true,
      },
      organization_id: {
        type: Number,
        required: true,
      },
      location_id: {
        type: String,
        required: true,
      },
    },
    destination_data: {
      customer_name: {
        type: String,
        required: true,
      },
      customer_address: {
        type: String,
        required: true,
      },
      customer_email: {
        type: String,
        required: false,
      },
      customer_phone: {
        type: String,
        required: true,
      },
      customer_address_detail: {
        type: String,
        required: true,
      },
      customer_zip_code: {
        type: String,
        required: true,
      },
      zone_code: {
        type: String,
        required: true,
      },
      organization_id: {
        type: Number,
        required: true,
      },
      location_id: {
        type: String,
        required: true,
      },
    },
    koli_data: [koliDataSchema],
    custom_field: {
      catatan_tambahan: {
        type: String,
        required: false,
      },
    },
    currentLocation: {
      name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
  },
  { collection: "packages" }
);

if (!mongoose.models.Package) {
  mongoose.model("Package", packageSchema);
}
module.exports = mongoose.model("Package", packageSchema);

/** EXAMPLE SCHEMA */
/*
var packageSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { collection: "packages" }
);
*/
