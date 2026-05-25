const RECIPIENT_EMAIL = 'ed.jimenez0012@gmail.com';

function doPost(e) {
  try {
    const data = {
      firstName: getValue_(e, 'firstName'),
      lastName: getValue_(e, 'lastName'),
      phone: getValue_(e, 'phone'),
      email: getValue_(e, 'email'),
      acceptedPrivacyPolicy: getValue_(e, 'acceptedPrivacyPolicy') === 'true',
    };

    validate_(data);

    const submittedAt = Utilities.formatDate(
      new Date(),
      'America/Panama',
      "EEEE, dd 'de' MMMM 'de' yyyy HH:mm"
    );

    const subject = 'Nuevo preregistro - Panama Viajero';
    const body =
      'Se recibio un nuevo preregistro en Panama Viajero.\n\n' +
      'Fecha: ' + submittedAt + '\n' +
      'Nombre: ' + data.firstName + '\n' +
      'Apellido: ' + data.lastName + '\n' +
      'Telefono: ' + data.phone + '\n' +
      'Correo: ' + data.email + '\n' +
      'Acepto politica: ' + (data.acceptedPrivacyPolicy ? 'Si' : 'No');

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      body: body,
      replyTo: data.email,
      name: 'Panama Viajero',
    });

    return jsonResponse_({
      ok: true,
      message: 'Registro enviado correctamente',
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error && error.message ? error.message : 'Error inesperado',
    });
  }
}

function getValue_(event, key) {
  return event && event.parameter && event.parameter[key]
    ? String(event.parameter[key]).trim()
    : '';
}

function validate_(data) {
  if (data.firstName.length < 2) throw new Error('Nombre invalido');
  if (data.lastName.length < 2) throw new Error('Apellido invalido');
  if (data.phone.length < 7) throw new Error('Telefono invalido');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error('Correo invalido');
  if (!data.acceptedPrivacyPolicy) throw new Error('Debes aceptar la politica de privacidad');
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
