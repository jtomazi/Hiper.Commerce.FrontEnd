<template>
  <main>
    <slot>
      <b-modal id="modal-security-key">
        <!-- HEADER MODAL -->
        <template #modal-header="{}">
          <h5>Conectar conta</h5>
        </template>
        <!-- BODY MODAL -->
        <template #default="{}">
          <div v-show="messageError">
            <div
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <div>
                {{ messageError }}
              </div>
            </div>
          </div>
          <div>
            <p>
              Insira a chave de segurança referente a conta do
              <strong>Hiper Gestão</strong>.
            </p>
            <div class="form-group">
              <input
                type="text"
                id="chave"
                class="chave form-control me-2"
                maxlength="64"
                v-model="securityKey"
              />
            </div>
          </div>
        </template>
        <!-- FOOTER MODAL -->
        <template #modal-footer="{ cancel }">
          <div>
            <b-button
              @click="disconnectAccount"
              size="sm"
              class="btn btn-warning"
              v-show="accountIsDefined"
            >
              Desconectar
            </b-button>
          </div>
          <div>
            <b-button ref="Cancel" size="sm" @click="cancel()">
              Cancelar
            </b-button>
            <b-button size="sm" variant="primary" @click="connectAccount">
              Conectar
            </b-button>
          </div>
        </template>
      </b-modal>
    </slot>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      securityKey: "",
      messageError: ""
    };
  },
  methods: {
    connectAccount() {
      this.$store
        .dispatch("connectInAccount", this.securityKey)
        .then(res => {
          this.messageError = "";
          this.$refs.Cancel.click();
          this.$store.dispatch("getProducts");
        })
        .catch(error => {
          this.messageError =  error.response.data.errors[0] || error;;
        });
    },

    disconnectAccount() {
      this.$store.commit("UNDEFINE_ACCOUNT");
      this.$refs.Cancel.click();
    }
  },
  computed: {
    ...mapGetters(["accountIsDefined"])
  }
};
</script>

<style>
.modal-footer {
  display: flex !important;
  justify-content: space-between !important;
}
</style>
